import { useState, type SubmitEvent } from "react";

export default function NewsletterForm() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<"idle" | "submitted">("idle");

	function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!email.includes("@")) return;
		// Wire this up to your provider of choice (Sanity form doc, Resend, etc).
		setStatus("submitted");
	}

	if (status === "submitted") {
		return (
			<p className="text-sm font-medium text-green-700 dark:text-green-400">
				Thanks — you're on the list.
			</p>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
			<input
				type="email"
				required
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="you@example.com"
				className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
			/>
			<button
				type="submit"
				className="shrink-0 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-neutral-200"
			>
				Subscribe
			</button>
		</form>
	);
}
