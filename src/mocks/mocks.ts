
import {STARSHIPS_QUERY} from '../containers/Game'; 

export const itemsMock = [
  {"id":"cj0nwtqvrq53k0114b291ao52","name":"Naboo Royal Starship","hyperdriveRating":1.8},
  {"id":"cj0nwtqpzq4tt01142nh7e9i4","name":"Millennium Falcon","hyperdriveRating":0.5},
]
export const mocks = [
  {
    request: {
      query: STARSHIPS_QUERY,
    },
    result: {
      data: {
        allPersons:  itemsMock,
      },
    },
  },
];

export const gameInput = [{"id":"cj0nv9pi6ewi201308xa3cuha","name":"Arvel Crynyd","height":null,"__typename":"Person"},{"id":"cj0nv9pyeewx30130y8lhjw4e","name":"Sly Moore","height":178,"__typename":"Person"}]


export const gameResult =[{"id":"cj0nv9pg3ewho0130tijy6bk9","name":"Boba Fett","height":183,"__typename":"Person","type":"People","winner":true},{"id":"cj0nv9pyeewx30130y8lhjw4e","name":"Sly Moore","height":178,"__typename":"Person","type":"People","winner":false}]