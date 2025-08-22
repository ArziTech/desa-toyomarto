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

const LanguageSelector = () => {
  // TODO: Get the current language from the path

  return (
      <Select defaultValue={'id'}>
        <SelectTrigger className="text-white ">
          <Globe className={'text-white '} />
          <SelectValue placeholder="Select a fruit" className={'text-white'} />
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
