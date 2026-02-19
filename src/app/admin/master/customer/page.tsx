import { fetchCustomers } from '@/app/lib/master-actions';
import CustomerForm from '@/components/master/customer-form';

export default async function Page() {
    const customers = await fetchCustomers();

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6 pb-8">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Customer Master</h1>
                <p className="text-slate-500">Add and manage customers.</p>
            </div>
            <CustomerForm />
            {customers.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-base font-semibold text-slate-900">Existing Customers</h2>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{customers.length}</span>
                    </div>
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wide">
                            <tr>
                                <th className="px-6 py-3 text-left">Code</th>
                                <th className="px-6 py-3 text-left">Name</th>
                                <th className="px-6 py-3 text-left">Contact</th>
                                <th className="px-6 py-3 text-left">Phone</th>
                                <th className="px-6 py-3 text-left">Email</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {customers.map(c => (
                                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-3 font-mono text-xs text-slate-600">{c.code}</td>
                                    <td className="px-6 py-3 font-medium text-slate-900">{c.name}</td>
                                    <td className="px-6 py-3 text-slate-600">{c.contactPerson || '—'}</td>
                                    <td className="px-6 py-3 text-slate-600">{c.phone || '—'}</td>
                                    <td className="px-6 py-3 text-slate-600">{c.email || '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
