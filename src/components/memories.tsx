import { CardContent } from "@/components/ui/card";

interface IMemories {
    imgSrc: string
}

export function Memories({ imgSrc }: IMemories) {
  return (
      <CardContent>
        <div>
         <img src={imgSrc} alt="" className="w-full h-auto rounded-lg m-3" />
        </div>
      </CardContent>
  );
}