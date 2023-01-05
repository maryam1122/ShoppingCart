import { styled,Paper } from "@mui/material";

    export const productCategories =[
        {
            value: "All",
            id: 0,
          },
          {
            value: "Clothes",
            id: 1,
          },
          {
            value: "Electronics",
            id: 2,
          },
          {
            value: "Furniture",
            id: 3,
          },
          {
            value: "Shoes",
            id: 4,
          },
          {
            value: "Others",
            id: 5,
          },
    ]
    export const getCategoryId =(name :string) =>{
        return productCategories.find((item) => item.value === name )?.id;
    }
    export const getPagesNo =(total:number , each:number) =>{
          return Math.ceil(total/each)
    }
    export const scrollUp = () =>{
        window.scrollTo({
          top: 0,
          behavior: "auto"
        })
    }
    export const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
      }));
   
    export const sortOptions = [
        {
          value: "None",
        },
        {
          value: "Lowest",
        },
        {
          value: "Highest",
        },
      ];
      

