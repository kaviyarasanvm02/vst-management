'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function WeeklyActivityChart({ data }: { data: { name: string; hours: number }[] }) {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity={1} />
                        </linearGradient>
                        <linearGradient id="emptyBar" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#f1f5f9" stopOpacity={1} />
                            <stop offset="100%" stopColor="#e2e8f0" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" strokeOpacity={0.5} />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                        dy={14}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }}
                    />
                    <Tooltip
                        cursor={{ fill: '#f8fafc', opacity: 0.8 }}
                        contentStyle={{
                            borderRadius: '16px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                            padding: '12px 16px',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(4px)'
                        }}
                        itemStyle={{ color: '#0f172a', fontWeight: 600, fontSize: '14px' }}
                        formatter={(value: number | undefined) => [`${value ?? 0} hrs`, 'Logged']}
                    />
                    <Bar dataKey="hours" radius={[6, 6, 6, 6]} barSize={32}>
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.hours > 0 ? "url(#barGradient)" : "url(#emptyBar)"}
                                style={{
                                    filter: entry.hours > 0 ? 'drop-shadow(0px 4px 6px rgba(99, 102, 241, 0.2))' : 'none'
                                }}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
