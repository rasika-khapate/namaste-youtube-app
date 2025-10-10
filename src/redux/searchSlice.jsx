import { createSlice } from "@reduxjs/toolkit";


// Why we don’t use an array in this case

// Because every time you check for a cached result,
// you’d have to do an .find() or .some() — which is O(n) time complexity.

// If you use an object, searchCache[searchQuery] is O(1) (instant lookup).

// That’s why objects (or Maps) are the perfect fit for cache systems.

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addCacheResults: (state, action) => {
      // {ip : ["iphone", "iphone max 12", "iphone 13"]} - this is the example of data we would be sending in via action
      //   state = Object.assign(state, action.payload);

    //   state = {...state, ...action.payload} - WHY THIS ISNT WORKING, EXPLANATION DONW 👇
      return { ...state, ...action.payload };
    },
  },
});

export default searchSlice.reducer;

export const { addCacheResults } = searchSlice.actions;

// 2️⃣ What { ...state, ...action.payload } does

// The spread operator (...) doesn’t mutate the existing object —
// it creates a new one and assigns it to state.

// But in Redux Toolkit, state is not a normal variable — it’s a draft proxy object managed by Immer.

// So this line:

// state = { ...state, ...action.payload };

// just reassigns the local state variable inside your function.
// Immer doesn’t track this reassignment — it only tracks mutations to the draft.

// That means the store never sees your new object.
// → ❌ no actual change happens in Redux.

// If you want to use the spread syntax, you must RETURN the new object explicitly:

// return { ...state, ...action.payload };

// That tells Redux Toolkit, “Hey, replace the whole state with this new object.”
