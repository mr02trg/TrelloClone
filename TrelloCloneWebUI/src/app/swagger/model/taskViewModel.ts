/**
 * Trello Clone Core Api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SubTaskViewModel } from './subTaskViewModel';


export interface TaskViewModel { 
    createdDate?: Date;
    dueDate?: Date;
    cardId?: number;
    subTasks?: Array<SubTaskViewModel>;
    id?: number;
    name?: string;
    description?: string;
}
