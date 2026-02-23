'use client';

import { useState } from 'react';
import { UserCircleIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import SalaryStructureForm from '@/components/payroll/salary-structure-form';
import clsx from 'clsx';

export default function SalaryStructureClient({ users }: { users: any[] }) {
    const [selectedUser, setSelectedUser] = useState<any | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="flex gap-6 h-[600px]">
            {/* User List */}
            <div className="w-1/3 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <div className="p-4 border-b border-slate-100 bg-slate-50 font-bold text-slate-700">
                    Employees ({users.length})
                </div>
                <div className="overflow-y-auto flex-1 divide-y divide-slate-50">
                    {users.map(user => (
                        <div
                            key={user.id}
                            onClick={() => { setSelectedUser(user); setIsEditing(false); }}
                            className={clsx(
                                "p-4 cursor-pointer hover:bg-slate-50 transition-colors flex items-center gap-3",
                                selectedUser?.id === user.id ? "bg-indigo-50 hover:bg-indigo-50" : ""
                            )}
                        >
                            <div className="h-10 w-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                {user.image ? (
                                    <img src={user.image} alt={user.name} className="h-full w-full object-cover" />
                                ) : (
                                    <UserCircleIcon className="h-6 w-6 text-slate-400" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className={clsx("text-sm font-bold truncate", selectedUser?.id === user.id ? "text-indigo-700" : "text-slate-900")}>
                                    {user.name}
                                </p>
                                <p className="text-xs text-slate-500 truncate">{user.role?.name || 'Employee'}</p>
                            </div>
                            {user.salaryStructure ? (
                                <div className="h-2 w-2 rounded-full bg-emerald-500" title="Salary Configured"></div>
                            ) : (
                                <div className="h-2 w-2 rounded-full bg-slate-300" title="Not Configured"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Details & Form */}
            <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 overflow-y-auto">
                {selectedUser ? (
                    <div className="space-y-6">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center">
                                    {selectedUser.image ? (
                                        <img src={selectedUser.image} alt={selectedUser.name} className="h-full w-full object-cover rounded-full" />
                                    ) : (
                                        <UserCircleIcon className="h-10 w-10 text-slate-400" />
                                    )}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900">{selectedUser.name}</h2>
                                    <p className="text-sm text-slate-500">{selectedUser.role?.name} • {selectedUser.branch?.name || 'No Branch'}</p>
                                    <p className="text-xs text-slate-400 mt-1">{selectedUser.email}</p>
                                </div>
                            </div>
                            {!isEditing && (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-bold hover:bg-indigo-100 transition-colors"
                                >
                                    <PencilSquareIcon className="h-4 w-4" />
                                    Edit Structure
                                </button>
                            )}
                        </div>

                        {isEditing ? (
                            <SalaryStructureForm
                                userId={selectedUser.id}
                                initialData={selectedUser.salaryStructure}
                                onClose={() => { setIsEditing(false); window.location.reload(); }} // Simple reload to refresh data
                            />
                        ) : (
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                {selectedUser.salaryStructure ? (
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Current Salary Structure</h3>
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                                            <div className="flex justify-between border-b border-slate-200 pb-1">
                                                <span className="text-slate-500">Basic</span>
                                                <span className="font-medium text-slate-900">₹{selectedUser.salaryStructure.basic}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-slate-200 pb-1">
                                                <span className="text-slate-500">HRA</span>
                                                <span className="font-medium text-slate-900">₹{selectedUser.salaryStructure.hra}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-slate-200 pb-1">
                                                <span className="text-slate-500">Allowances</span>
                                                <span className="font-medium text-slate-900">₹{selectedUser.salaryStructure.allowances}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-slate-200 pb-1 text-red-600">
                                                <span>Deductions (PF+PT+Others)</span>
                                                <span className="font-medium">- ₹{(selectedUser.salaryStructure.pf + selectedUser.salaryStructure.pt + selectedUser.salaryStructure.deductions)}</span>
                                            </div>
                                            <div className="col-span-2 pt-2 flex justify-between items-center bg-white p-3 rounded-lg border border-indigo-100 shadow-sm">
                                                <span className="font-bold text-indigo-900">Net Salary (Approx)</span>
                                                <span className="font-bold text-xl text-indigo-600">₹{selectedUser.salaryStructure.netSalary}</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-10">
                                        <p className="text-slate-500 mb-4">No salary structure defined for this employee.</p>
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700"
                                        >
                                            Define Salary
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400">
                        <UserCircleIcon className="h-16 w-16 mb-4 opacity-50" />
                        <p>Select an employee to view or edit their salary structure.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
