'use client';

import { useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { format } from 'date-fns';

interface ExportButtonProps {
    data: any[];
    filename?: string;
    title?: string;
}

export function ExportButton({ data, filename = 'vst-report.pdf', title = 'Attendance Report' }: ExportButtonProps) {
    const [isExporting, setIsExporting] = useState(false);

    const handleExport = async () => {
        if (!data || data.length === 0) {
            toast.error('No data to export');
            return;
        }

        setIsExporting(true);
        const toastId = toast.loading('Generating PDF...');

        try {
            const doc = new jsPDF();

            // Add Logo/Header
            doc.setFontSize(22);
            doc.setTextColor(79, 70, 229); // Indigo 600
            doc.text('VST Timesheet', 14, 22);

            doc.setFontSize(12);
            doc.setTextColor(100, 116, 139); // Slate 500
            doc.text(title, 14, 30);
            doc.text(`Generated on: ${format(new Date(), 'PPP')}`, 14, 36);

            // Table Data
            const tableRows = data.map(item => [
                format(new Date(item.date), 'dd/MM/yyyy'),
                item.clockIn ? format(new Date(item.clockIn), 'HH:mm') : '-',
                item.clockOut ? format(new Date(item.clockOut), 'HH:mm') : '-',
                item.status || 'PRESENT',
                item.punchInNote || '-'
            ]);

            autoTable(doc, {
                startY: 45,
                head: [['Date', 'In', 'Out', 'Status', 'Notes']],
                body: tableRows,
                theme: 'striped',
                headStyles: { fillColor: [79, 70, 229] },
                alternateRowStyles: { fillColor: [248, 250, 252] },
            });

            doc.save(filename);
            toast.success('Report downloaded successfully', { id: toastId });

            // Offer native sharing if available
            if (navigator.share) {
                const blob = doc.output('blob');
                const file = new File([blob], filename, { type: 'application/pdf' });

                if (navigator.canShare && navigator.canShare({ files: [file] })) {
                    const shareToastId = toast.success('Report ready to share!', { icon: '📤' });
                    setTimeout(async () => {
                        try {
                            await navigator.share({
                                files: [file],
                                title: title,
                                text: 'Here is my VST Timesheet report.',
                            });
                        } catch (err) {
                            console.log('Share cancelled or failed', err);
                        }
                    }, 500);
                }
            }
        } catch (error) {
            console.error('Export failed:', error);
            toast.error('Failed to generate PDF', { id: toastId });
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <button
            onClick={handleExport}
            disabled={isExporting}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold hover:bg-indigo-100 transition-all active:scale-95 disabled:opacity-50"
        >
            <ArrowDownTrayIcon className="h-4 w-4" />
            {isExporting ? 'Exporting...' : 'Export PDF'}
        </button>
    );
}
