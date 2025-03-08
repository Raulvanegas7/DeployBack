import { ApiProperty } from "@nestjs/swagger"
import { Category } from "src/category/entities/category.entity";
import { OrderDetail } from "src/order_details/entities/order_detail.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { v4 as uuid } from 'uuid'



@Entity({ 
    name: 'products' 
})
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 100, nullable: false })
    name: string;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    type: string;

    @Column({ type: 'double precision', nullable: false })
    price: number;

    @Column({ nullable: false })
    designer: string;

    @Column({
        // type: "text",
        nullable: true,
        // default: 'default-image-url.jpg'
    })
    image: string;

    @Column({ type: 'int', nullable: false })
    stock: number;

    @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.product)
    orderDetails: OrderDetail[];

    @ManyToOne(() => Category, (category) => category.products, { nullable: true, eager: true })
    category: Category
}

