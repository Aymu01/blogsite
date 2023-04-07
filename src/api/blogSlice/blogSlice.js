import { createSlice } from "@reduxjs/toolkit";



export const userData = createSlice({
    name: 'userData',
    initialState:{
        entry: [],
        buildData:{"email":"","code":""},
        blogData:[]
    },
    reducers:{
        addUserData: (state, action) => {
            state.entry.push(action.payload);
        },
        buildPassEmail: (state,action) => {
            state.buildData.email = action.payload;
        },
        newPassword:(state,action) => {
            state.buildData.code = action.payload
        },
        addBlogData: (state,action) => {
            state.blogData.push(action.payload)
        }
    }
});

export const {addUserData,buildPassEmail,newPassword,addBlogData} = userData.actions;
export default userData.reducer;
0000000000000000000000000000000000000000