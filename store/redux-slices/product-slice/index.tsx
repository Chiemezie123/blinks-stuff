import { createSlice } from "@reduxjs/toolkit";

export const initialProductState = {
  name: "",
  amount: '',
  image: "", 
  imageName:"",
  description:"",
  
};


export const productSlice = createSlice({
    name: "ticketDetails",
    initialState: initialProductState,
    reducers: {
      updateName: (state, { payload }) => {
        state.name = payload;
      },
      updateImage: (state, { payload }) => {
        state.image = payload.image;
        state.imageName = payload.imageName;
      },
      updateAmount: (state, { payload }) => {
        state.amount = payload;
      },
      updateDescription: (state, { payload }) => {
        state.description= payload;
      },
      
      resetProductPage: () => initialProductState,
    },
  });
  
export const productAction = productSlice.actions;
  
  export const{updateAmount,updateDescription,updateImage,updateName,resetProductPage } = productAction;