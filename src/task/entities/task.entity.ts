import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblTasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    title: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    assignTo: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    project: string;

    @Column({ type: 'time', nullable: false })
    estimatedTime: Date;

    @Column({ type: 'varchar', length: 255, nullable: false })
    priority: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    reviewer: string;
}