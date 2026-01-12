'use client';

import { createTimesheet } from '@/app/lib/timesheet-actions';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';
import { BriefcaseIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

// MUI Imports
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import dayjs, { Dayjs } from 'dayjs';

// Custom MUI Theme for Brand Colors
const theme = createTheme({
    palette: {
        primary: {
            main: '#f59e0b', // Amber-500
        },
        secondary: {
            main: '#0f172a', // Slate-900 (Dark Blue)
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '0.5rem', // Match Tailwind rounded-lg
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: '1px',
                    },
                    backgroundColor: '#fff',
                }
            }
        }
    }
});

export default function CreateTimesheetForm({ projects }: { projects: any[] }) {
    const initialState = { message: '', errors: {} };
    const [state, dispatch] = useFormState(createTimesheet, initialState);

    // Controlled state for MUI components
    const [date, setDate] = useState<Dayjs | null>(dayjs());
    const [startTime, setStartTime] = useState<Dayjs | null>(null);
    const [endTime, setEndTime] = useState<Dayjs | null>(null);
    const [hours, setHours] = useState<string>('');

    // Auto-calculate hours when start or end time changes
    useEffect(() => {
        if (startTime && endTime) {
            const diffInMinutes = endTime.diff(startTime, 'minute');
            const diffInHours = diffInMinutes / 60;
            if (diffInHours > 0) {
                setHours(diffInHours.toFixed(2));
            } else {
                setHours(''); // or handle negative time error
            }
        }
    }, [startTime, endTime]);

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <form action={dispatch} className="max-w-xl mx-auto">
                    {/* Hidden Inputs for Server Action 'FormData' */}
                    <input type="hidden" name="date" value={date ? date.format('YYYY-MM-DD') : ''} />
                    <input type="hidden" name="hours" value={hours} />

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-4">
                            <h2 className="text-base font-semibold text-slate-900">New Timesheet Entry</h2>
                            <p className="text-sm text-slate-500">Fill in the details below to log your work.</p>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Date (MUI DatePicker) */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Date
                                </label>
                                <DatePicker
                                    value={date}
                                    onChange={(newValue) => setDate(newValue)}
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                            size: 'small',
                                            required: true,
                                            error: !!state?.errors?.date,
                                        }
                                    }}
                                />
                            </div>

                            {/* Project */}
                            <div>
                                <label htmlFor="projectId" className="block text-sm font-medium text-slate-700 mb-1">
                                    Project
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                        <BriefcaseIcon className="h-5 w-5 text-slate-400 group-focus-within:text-amber-500 transition-colors" />
                                    </div>
                                    <select
                                        id="projectId"
                                        name="projectId"
                                        className="block w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm appearance-none transition-all hover:border-amber-400 bg-white"
                                        defaultValue=""
                                        required
                                    >
                                        <option value="" disabled>Select a project</option>
                                        {projects.map((project) => (
                                            <option key={project.id} value={project.id}>
                                                {project.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Start Time */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Start Time
                                    </label>
                                    <TimePicker
                                        value={startTime}
                                        onChange={(newValue) => setStartTime(newValue)}
                                        slotProps={{ textField: { fullWidth: true, size: 'small' } }}
                                    />
                                </div>

                                {/* End Time */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        End Time
                                    </label>
                                    <TimePicker
                                        value={endTime}
                                        onChange={(newValue) => setEndTime(newValue)}
                                        slotProps={{ textField: { fullWidth: true, size: 'small' } }}
                                    />
                                </div>
                            </div>

                            {/* Activity */}
                            <div>
                                <label htmlFor="activity" className="block text-sm font-medium text-slate-700 mb-1">
                                    Activity
                                </label>
                                <TextField
                                    id="activity"
                                    name="activity"
                                    placeholder="e.g. Development, Meeting"
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                                    Description
                                </label>
                                <TextField
                                    id="description"
                                    name="description"
                                    placeholder="What did you work on?"
                                    multiline
                                    rows={3}
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Location */}
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">
                                        Location
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                            <MapPinIcon className="h-5 w-5 text-slate-400 group-focus-within:text-amber-500 transition-colors" />
                                        </div>
                                        <select
                                            id="location"
                                            name="location"
                                            className="block w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 text-slate-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm appearance-none transition-all hover:border-amber-400 bg-white"
                                            defaultValue="KalayarKoil office"
                                            required
                                        >
                                            <option value="KalayarKoil office">KalayarKoil office</option>
                                            <option value="Home">Home</option>
                                            <option value="Client Site">Client Site</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Calculated Duration */}
                                <div>
                                    <label htmlFor="hours-display" className="block text-sm font-medium text-slate-700 mb-1">
                                        Total Duration
                                    </label>
                                    <TextField
                                        id="hours-display"
                                        value={hours}
                                        // Read-only to enforce use of TimePickers, but technically user can override if we allowed onChange
                                        // Let's allow manual override in case calculation is off or they just want to type
                                        onChange={(e) => setHours(e.target.value)}
                                        type="number"
                                        placeholder="0.0"
                                        fullWidth
                                        size="small"
                                        required
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">Hrs</InputAdornment>,
                                            inputProps: { min: 0, step: 0.1 }
                                        }}
                                        helperText={startTime && endTime ? "Auto-calculated from Time" : "Enter manually or select Time"}
                                    />
                                </div>
                            </div>

                            <div id="status-error" aria-live="polite" aria-atomic="true">
                                {state.message && (
                                    <p className="text-sm text-red-500 flex items-center gap-1" key={state.message}>
                                        <span className="h-1.5 w-1.5 rounded-full bg-red-500 inline-block" />
                                        {state.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex justify-end">
                            <Button type="submit" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white">
                                Save Timesheet
                            </Button>
                        </div>
                    </div>
                </form>
            </LocalizationProvider>
        </ThemeProvider>
    );
}
