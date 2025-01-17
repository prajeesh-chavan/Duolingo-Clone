import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

type Props = {
    title: string;
};

export const Header = ({ title }: Props) => {
    return (
        <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] border-b-2 mb-5 text-neutral-400 lg:z-50">

            
            <Link href="/courses">
            <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm">
                    <ArrowLeftIcon className="h-5 w-5 stroke-2 text-neutral-400"/>
                </Button>
                <h1 className="font-bold text-lg">
                    {title}
                </h1>
                <div/>
            </div>
            
            </Link>
        </div>
    )
}