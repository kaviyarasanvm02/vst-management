'use client';

import { useActionState } from 'react';
import { copyYesterdayEntries } from '@/app/lib/timesheet-actions';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

export function CopyEntryButton() {
    const [state, action, pending] = useActionState(copyYesterdayEntries, null);

    useEffect(() => {
        if (state?.success) {
            alert(state.success);
        } else if (state?.error) {
            alert(state.error);
        }
    }, [state]);

    return (
        <form action={action}>
            <button
                type="submit"
                disabled={pending}
                className="flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-indigo-600 disabled:opacity-50"
                title="Copy all entries from your last active day to today"
            >
                <DocumentDuplicateIcon className="h-5 w-5" />
                <span className="hidden sm:inline">{pending ? 'Copying...' : 'Copy Yesterday'}</span>
            </button>
        </form>
    );
}
