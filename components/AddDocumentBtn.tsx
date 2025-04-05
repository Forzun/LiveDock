"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import plusIcon from "../public/assets/icons/add.svg";
import { useRouter } from "next/navigation";
import { createDocument } from "@/lib/actions/room.actions";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
    const router = useRouter()

    const addDocumentHandler = async () => {
        console.log("working")
        try{ 
            const room = await createDocument({userId , email})
            console.log(room)
            if(room) router.push(`/documents/${room.id}`)
        }catch (error) { 
            console.log(error);
        }
  };
  return (
    <div>
      <Button
        onClick={addDocumentHandler}
        size={"lg"}
        type="submit"
        className="gradient-blue rounded-xl flex gap-1 shadow-md"
      >
        <Image src={plusIcon} alt="add" width={24} height={24} />
        <p className="hidden sm:block">Start a blank document</p>
      </Button>
    </div>
  );
};

export default AddDocumentBtn;
