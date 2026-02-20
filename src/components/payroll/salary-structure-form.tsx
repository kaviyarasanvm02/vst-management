'use client';

import { useState } from 'react';
import { updateSalaryStructure, type SalaryStructureData } from '@/app/lib/payroll-actions';
import { toast } from 'react-hot-toast';

export default function SalaryStructureForm({
    userId,
    initialData,
    onClose
}: {
    userId: string;
    initialData?: any;
    onClose: () => void
}) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<SalaryStructureData>({
        basic: initialData?.basic || 0,
        hra: initialData?.hra || 0,
        allowances: initialData?.allowances || 0,
        pf: initialData?.pf || 0,
        pt: initialData?.pt || 0,
        deductions: initialData?.deductions || 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await updateSalaryStructure(userId, formData);
            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success('Salary Structure Saved!');
                onClose();
            }
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const gross = formData.basic + formData.hra + formData.allowances;
    const totalDeductions = formData.pf + formData.pt + formData.deductions;
    const net = gross - totalDeductions;

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <h3 className="font-semibold text-slate-700 text-sm">Earnings</h3>
                    <div>
                        <label className="block text-xs font-medium text-slate-500">Basic Salary</label>
                        <input type="number" name="basic" value={formData.basic} onChange={handleChange} className="w-full rounded-md border-slate-300 text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-slate-500">HRA</label>
                        <input type="number" name="hra" value={formData.hra} onChange={handleChange} className="w-full rounded-md border-slate-300 text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-slate-500">Allowances</label>
                        <input type="number" name="allowances" value={formData.allowances} onChange={handleChange} className="w-full rounded-md border-slate-300 text-sm" />
                    </div>
                    <div className="pt-2 border-t text-sm font-bold text-emerald-600 flex justify-between">
                        <span>Gross Earnings</span>
                        <span>₹{gross.toFixed(2)}</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="font-semibold text-slate-700 text-sm">Deductions</h3>
                    <div>
                        <label className="block text-xs font-medium text-slate-500">Provident Fund (PF)</label>
                        <input type="number" name="pf" value={formData.pf} onChange={handleChange} className="w-full rounded-md border-slate-300 text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-slate-500">Professional Tax (PT)</label>
                        <input type="number" name="pt" value={formData.pt} onChange={handleChange} className="w-full rounded-md border-slate-300 text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-slate-500">Other Deductions</label>
                        <input type="number" name="deductions" value={formData.deductions} onChange={handleChange} className="w-full rounded-md border-slate-300 text-sm" />
                    </div>
                    <div className="pt-2 border-t text-sm font-bold text-red-600 flex justify-between">
                        <span>Total Deductions</span>
                        <span>₹{totalDeductions.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg flex justify-between items-center border border-slate-200">
                <span className="font-bold text-slate-700">Net Salary (In Hand)</span>
                <span className="font-bold text-xl text-indigo-600">₹{net.toFixed(2)}</span>
            </div>

            <div className="flex justify-end gap-2">
                <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg">Cancel</button>
                <button type="submit" disabled={loading} className="px-4 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg disabled:opacity-50">
                    {loading ? 'Saving...' : 'Save Structure'}
                </button>
            </div>
        </form>
    );
}
