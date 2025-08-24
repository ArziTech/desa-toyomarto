'use client'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {Globe} from "lucide-react";
import {useLocale} from "use-intl";
import {usePathname} from "next/navigation";
import {useRouter} from "next/navigation";
import {cn} from "@/lib/utils";

const LanguageSelector = ({className}:{className?:string}) => {

  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale:string) => {
    const newPath = `/${newLocale}${pathname.substring(3)}`;
    router.push(newPath);
  };

  return (
      <Select defaultValue={locale}  onValueChange={handleLocaleChange}>
        <SelectTrigger className={cn("text-white", className)}>
          <Globe className={'text-black lg:text-white '} />
          <SelectValue placeholder="Select a fruit" className={'lg:text-white' +
              ' text-black'} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Languages</SelectLabel>
            <SelectItem value="en">en</SelectItem>
            <SelectItem value="id">id</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
  )
}
export default LanguageSelector
