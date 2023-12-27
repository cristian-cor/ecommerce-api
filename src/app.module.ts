import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { AwsModule } from './aws/aws.module';
import { ShoppingCardModule } from './shopping-card/shopping-card.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    CategoriesModule,
    AuthModule,
    AwsModule,
    ShoppingCardModule,
    OrderModule,
  ],
})
export class AppModule {}
