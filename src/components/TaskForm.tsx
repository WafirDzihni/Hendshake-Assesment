import { useState } from "react";

interface TaskFormProps {
    addTask: (task: any) => void;
}

export default function TaskForm({ addTask }: TaskFormProps) {
    const [activity, setActivity] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("Education");
    const [bookingRequired, setBookingRequired] = useState(false);
    const [accessibility, setAccessibility] = useState(0.5);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!activity.trim() || price === "") return;

        addTask({
            id: Date.now(),
            activity,
            price: Number(price),
            type,
            bookingRequired,
            accessibility,
        });

        setActivity("");
        setPrice("");
        setType("education");
        setBookingRequired(false);
        setAccessibility(0.5);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-4 rounded-lg text-gray-700">
            <input type="text" placeholder="Activity" value={activity} onChange={(e) => setActivity(e.target.value)} className="border p-3 rounded-md" required />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-3 rounded-md" required />
            <select value={type} onChange={(e) => setType(e.target.value)} className="border p-3 rounded-md">
                {["Education", "Recreational", "Social", "DIY", "Charity", "Cooking", "Relaxation", "Music", "Busywork"].map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <label className="flex items-center gap-2">
                <input type="checkbox" checked={bookingRequired} onChange={(e) => setBookingRequired(e.target.checked)} className="w-4 h-4" />
                <span>Booking Required</span>
            </label>
            <label>
                Accessibility: <span>{accessibility}</span>
                <input type="range" min="0" max="1" step="0.1" value={accessibility} onChange={(e) => setAccessibility(parseFloat(e.target.value))} className="w-full mt-2" />
            </label>
            <button type="submit" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Add Task</button>
        </form>
    );
}
