import { Service } from "../Service";
import * as Models from "@/entities/models";
import * as Repositories from "@/entities/repositories";
import * as DTOs from "@/entities/DTOs";
import type { UnwrapRef } from "vue";

export class Cart extends Service {
  constructor() {
    super();
  }

  public async getAll() {
    const repository = new Repositories.Cart();

    const response = await repository.getAll();

    return this.handlerResponse(response, (response) => {
      const cartDTOs = response.data.data.data;
      const carts = cartDTOs.map(DTOs.Cart.toModel);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: {
          entities: this.getCacheObject(carts, "id"),
          genericList: this.getIndexList(carts, "id"),
        },
      });
    });
  }

  public async get(id: number) {
    const repository = new Repositories.Cart({ id: id });

    const response = await repository.get();

    return this.handlerResponse(response, (response) => {
      const cartDTO = response.data.data.data;
      const cart = DTOs.Cart.toModel(cartDTO);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: cart,
      });
    });
  }

  public async create(cart: Models.Cart | UnwrapRef<Models.Cart>) {
    const repository = new Repositories.Cart({
      payload: cart.getDTO(),
    });

    const response = await repository.create();

    return this.handlerResponse(response, (response) => {
      const cartDTO = response.data.data.data;
      const cart = DTOs.Cart.toModel(cartDTO);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: cart,
      });
    });
  }

  public async update(cart: Models.Cart | UnwrapRef<Models.Cart>) {
    const repository = new Repositories.Cart({
      payload: cart.getDTO(),
    });

    const response = await repository.update();

    return this.handlerResponse(response, (response) => {
      const cartDTO = response.data.data.data;
      const cart = DTOs.Cart.toModel(cartDTO);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: cart,
      });
    });
  }

  public async delete(cart: Models.Cart | UnwrapRef<Models.Cart>) {
    const repository = new Repositories.Cart({
      payload: cart.getDTO(),
    });

    const response = await repository.delete();

    return this.handlerResponse(response, (response) => {
      const result = response.data.data.data;

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: result,
      });
    });
  }
}
