import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { GetCartDto } from './dto/getCart.dto';
import { AddToCartDto } from './dto/addtocart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { RemoveCartDto } from './dto/removecart.dto';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get(':userId')
  async getCart(@Param('userId') userId: string): Promise<GetCartDto> {
    return this.shoppingCartService.getCartByUserId(userId);
  }

  @Post('add')
  async addToCart(@Body() addToCartDto: AddToCartDto): Promise<GetCartDto> {
    return this.shoppingCartService.addProductToCart(addToCartDto);
  }

  @Put('update')
  async updateCartProductQuantity(@Body() updateDto: UpdateShoppingCartDto): Promise<GetCartDto> {
    return this.shoppingCartService.updateCartProductQuantity(updateDto);
  }

  @Delete("remove")
  async removeProductFromCart(@Body() removeCart: RemoveCartDto): Promise<GetCartDto> {
    return this.shoppingCartService.removeProductCart(removeCart);
  }

  @Delete('clear/:userId')
  async clearCart(@Param('userId') userId: string): Promise<GetCartDto> {
    return this.shoppingCartService.clearCart(userId);
  }
}
