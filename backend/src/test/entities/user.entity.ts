import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("user_mst")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    created_date_time: Date;
}