import { AnyAction, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

import { addtoCart, removeFromCart } from "../../redux/reducers/cartReducer";
import { fetchAllProduct } from "../../redux/reducers/productReducer";
import { createStore, RootState } from "../../redux/store";

import server from "../shared/server";


let store: ToolkitStore<
  RootState,
  AnyAction,
  [ThunkMiddleware<RootState, AnyAction, undefined>]
>;

beforeAll(()=>{
    server.listen()
})

afterAll(()=>{
    server.close()
})

beforeEach(async () => {
    store = createStore();
  });
  describe("Test cart actions", ()=>{
    test("should return intial state", ()=>{
        expect(store.getState().cartReducer.length).toBe(0);
    })

    test("should add product to cart", async ()=>{
        await store.dispatch(fetchAllProduct())
        const product = store.getState().productReducer
        store.dispatch(addtoCart(product[0]))
        expect(store.getState().cartReducer.length).toBe(1);
    })

    test("should increase the count of existing product", async ()=>{
        await store.dispatch(fetchAllProduct())
        const product = store.getState().productReducer
        store.dispatch(addtoCart(product[0]))
        store.dispatch(addtoCart(product[0]))
        expect(store.getState().cartReducer[0].count).toBe(2);
    })

    test("should delete product from the cart", async ()=>{
        await store.dispatch(fetchAllProduct())
        const product = store.getState().productReducer
        store.dispatch(addtoCart(product[0]))
        store.dispatch(removeFromCart(0))
        expect(store.getState().cartReducer.length).toBe(0);
    })

    test("should reduce the count of product from the cart", async ()=>{
        await store.dispatch(fetchAllProduct())
        const product = store.getState().productReducer
        store.dispatch(addtoCart(product[0]))
        store.dispatch(addtoCart(product[0]))
        store.dispatch(removeFromCart(0))
        expect(store.getState().cartReducer[0].count).toBe(1);
    })
  })