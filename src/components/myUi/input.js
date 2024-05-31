import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton({ type, action, placeholder }) {
	return (
		<form className="flex w-full max-w-sm items-center space-x-2 outline-none">
			<Input
				type={type}
				placeholder={placeholder}
				className="focus:outline-none ring-[0.5px] ring-orange-400"
			/>
			<Button type="submit">{action}</Button>
		</form>
	);
}
