import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MyForm from "./MyForm";

export function DialogDemo({ action }: { action: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="bg-zinc-300">
          {action}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mt-25 text-center">
            Ajout/Modification du produit
          </DialogTitle>
        </DialogHeader>
        <MyForm />
      </DialogContent>
    </Dialog>
  );
}

<div className="grid gap-4 py-4">
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor="titre" className="text-right">
      Titre
    </Label>
    <Input id="prix" className="col-span-3" />
  </div>
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor="username" className="text-right">
      Prix
    </Label>
    <Input id="prix" className="col-span-3" type="number" />
  </div>
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor="description" className="text-right" type="textarea">
      Description
    </Label>
    <Textarea id="description" className="h-20 col-span-3" />
  </div>
</div>;
