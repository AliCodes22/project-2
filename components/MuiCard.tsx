"use client";

import { useRouter } from "next/navigation"; // Router pour pouvoir naviguer dans l'application
import { useState } from "react"; // State management for dialog

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  IconButton,
  Popover,
} from "@mui/material"; // Material-UI components pour le style
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { FiTool } from "react-icons/fi";

// type pour les props du Card
type CardProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

// Card cree avec Material-UI. Affiche details du produit incluant le nom, prix et description
const MuiCard = ({ id, name, description, image, price }: CardProps) => {
  const router: AppRouterInstance = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClickOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idPopover = open ? "simple-popover" : undefined;

  return (
    <Box className="max-w-xs transition duration-300 ease-in-out ">
      <Card className="h-full flex flex-col shadow-md hover:shadow-lg  transition-shadow duration-300">
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={name}
          className="object-cover"
        />
        <CardContent className="flex-grow">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="font-bold"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="line-clamp-2"
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions className="mt-auto flex justify-between">
          <Button
            size="small"
            variant="outlined"
            className="bg-red-200 border-red-500 text-neutral-900 hover:bg-zinc-200"
            color="primary"
            onClick={() => {
              router.push(`/produits/${id}`);
            }}
          >
            Details
          </Button>
          <Typography
            variant="body1"
            className="font-semibold text-black-600 pr-5"
          >
            Prix: ${price}
          </Typography>
          <IconButton onClick={handleClickOpen}>
            <FiTool />
          </IconButton>
        </CardActions>
      </Card>

      <Popover
        id={idPopover}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box p={1}>
          <Button className="text-black font-semibold">Modifier</Button>
          <Button className="text-red-500 font-semibold">Supprimer</Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default MuiCard;
