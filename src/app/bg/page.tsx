import { Background16 } from "@/components/ui/background";

export default function Page() {
    return (
        <div className="w-full h-screen relative">
            <Background16 />
            <div className="absolute top-4 left-4 text-black z-10">
                Test - Background should be visible
            </div>
        </div>
    );
}