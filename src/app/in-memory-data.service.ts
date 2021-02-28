import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Item } from './items';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Dr Nice', age: 22, level: 58, heroClass: 'Barbarian', friends: ['Narco', 'Bombasto'], cash: 1.5, items: ['Cull', 'Dark seal'] },
      { id: 12, name: 'Narco', age: 18, level: 33, heroClass: 'Cleric', friends: ['Dr Nice', 'Bombasto'], cash: 2, items: ['Cull', 'Dark seal'] },
      { id: 13, name: 'Bombasto', age: 30, level: 75, heroClass: 'Rogue', friends: ['Narco', 'Dr Nice'], cash: 0.5, items: ['Cull', 'Dark seal'] },
      { id: 14, name: 'Celeritas', age: 25, level: 60, heroClass: 'Wizard', friends: ['Magma', 'RubberMan'], cash: 5, items: ['Cull', 'Dark seal'] },
      { id: 15, name: 'Magneta', age: 29, level: 45, heroClass: 'Fighter', friends: ['Narco', 'Dr IQ'], cash: 4, items: ['Cull', 'Dark seal'] },
      { id: 16, name: 'RubberMan', age: 33, level: 80, heroClass: 'Cleric', friends: ['Magneta', 'Tornado'], cash: 3.3, items: ['Cull', 'Dark seal'] },
      { id: 17, name: 'Dynama', age: 22, level: 15, heroClass: 'Barbarian', friends: ['Narco', 'Dr IQ'], cash: 1.9, items: ['Cull', 'Dark seal']},
      { id: 18, name: 'Dr IQ', age: 20, level: 22, heroClass: 'Fighter', friends: ['Tornado', 'RubberMan'], cash: 4.2, items: ['Cull', 'Dark seal'] },
      { id: 19, name: 'Magma', age: 35, level: 56, heroClass: 'Rogue', friends: ['Celeritas', 'Dynama'], cash: 1.2, items: ['Cull', 'Dark seal'] },
      { id: 20, name: 'Tornado', age: 31, level: 50, heroClass: 'Wizard', friends: ['Dynama', 'Magma'], cash: 2.7, items: ['Cull', 'Dark seal'] }
    ];
    const items: Item[] = [
      {id: 1, name: 'Cull', health: '+2', power: '+2', image: 'https://cdn1.dotesports.com/wp-content/uploads/2018/08/12032519/Cull.png', price: 0.2},
      {id: 2, name: 'dark seal', health: '+2', power: '+2', image: 'https://i.pinimg.com/originals/36/d8/79/36d879c1f37d2c42bc9bc849f9dedf06.png', price: 1.5},
      {id: 3, name: 'Doran`s Blade', health: '+2', power: '+2', image: 'https://senpai.gg/blog/wp-content/uploads/2020/11/1055_Marksman_T1_DoransBlade-1.png', price: 1},
      {id: 4, name: 'Doran`s Ring', health: '+2', power: '+2', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfeb794f72ab86ce5/5fa1ef94fe49b57a83a1717c/1056_Mage_T1_DoransRing.png', price: 0.6},
      {id: 5, name: 'GOREDRINKER', health: '+2', power: '+2', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5974e8f62b96e503/5fa1f07e432f517518d427c8/6630_Fighter_T4_GoreDrinker.png', price: 0.9},
      {id: 6, name: 'Emberknife', health: '+2', power: '+2', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdec5e25776fa98b7/5fa1ef84f9cf41781dad68c6/1035_Alll_T1_EmberKnife.png', price: 1.1},
      {id: 7, name: 'STRIDEBREAKER', health: '+2', power: '+2', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltda4b8e6374f678b4/5fa1f07f45fa7d72ddd20c88/6631_Fighter_T4_StrideBreaker.png?disposition=inline', price: 1.5},
      {id: 8, name: 'DIVINE SUNDERER', health: '+2', power: '+2', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt34cf2b8bd910fd89/5fa1f084209f0756c89d6c96/6632_Fighter_T4_DivineSunderer.png', price: 2.5},
      {id: 9, name: 'TRINITY FORCE', health: '+2', power: '+2', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb9cf8675571ebb0a/5fa1efdb6c73a0751fc7c13f/3078_Fighter_T4_TrinityForce.png', price: 0.4},
      {id: 10, name: 'NIGHT HARVESTER', health: '+2', power: '+2', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltaf02a9ed2a06c61d/5fa1f06f6178a9645452d2d4/4636_Mage_T4_NightHarvester.png', price: 2.1},
      {id: 11, name: 'Hailblade', health: '+2', power: '+2', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte094ee7894a35709/5fa1ef852425cd7a8af6b40a/1039_All_T1_HailBlade.png', price: 0.7},
      {id: 12, name: 'RIFTMAKER', health: '+2', power: '+2', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbebf6114bfcd4ec2/5fa1f06f1f9166620ed88bed/4633_Mage_T4_Riftmaker.png', price: 1.8},
      {id: 13, name: 'EVERFROST', health: '+2', power: '+2', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt534d6170cf84c476/5fa1f086545bdb56ce493423/6656_Mage_T4_Everfrost.png', price: 3.3},
      {id: 14, name: 'ECLIPSE', health: '+2', power: '+2', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt72195c8d98391772/5fa1f09df9cf41781dad68fe/6692_Assassin_T4_Eclipse.png', price: 1.4},
      {id: 15, name: 'GALEFORCE', health: '+2', power: '+2', image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdb840312c272ed27/5fa1f0931f9166620ed88bf5/6671_Marksman_T4_Galeforce.png', price: 2},
    ];

    const permissions: any[] = [
      {name: 'd@d.com', level: 'no_access'},
      {name: 'a@a.com', level: 'read_access'},
      {name: 'b@b.com', level: 'write_access'}
    ];

    const translates: any[] = [
      {
        "header": {
          "title": "Tour of Heroes"
        },
        "menu": {
          "dashboard": "Dashboard",
          "heroes": "Heroes",
          "store": "Store",
          "login": "Log in",
          "logout": "Log out",
          "register": "Sign up"
        },
        "search": {
          "placeholder": "Hero search"
        },
        "dashboard": {
          "title": "Top heroes"
        },
        "heroes": {
          "title": "Heroes",
          "name": "Name",
          "hero": "New hero"
        },
        "store": {
          "title": "Store",
          "price": "Price",
          "button": "Buy"
        },
        "card": {
          "title": "Details",
          "age": "Age",
          "level": "Level",
          "info": "Info",
          "inventory": "Equipment",
          "name": "Name",
          "class": "Class",
          "friends": "Friends",
          "save": "Save",
          "back": "Go back",
          "cash": "Cash",
          "item": "Item"
        },
        "validators": {
          "minName": "Minimum 3 characters",
          "alphabet": "Only Latin alphabet",
          "requiredName": "Name is required",
          "requiredAge": "Age is required",
          "requiredLevel": "Level is required",
          "minAge": "Min possible age is 1",
          "maxAge": "Max possible age is 100",
          "minLevel": "Min possible value is 1",
          "maxLevel": "Max possible value is 100",
          "class": "Please choose a class"
        },
        "classes": {
          "barbarian": "Barbarian",
          "cleric": "Cleric",
          "fighter": "Fighter",
          "rogue": "Rogue",
          "wizard": "Wizard"
        },
        "addHero": {
          "add": "Add",
          "close": "Close",
          "select": "Select a class",
          "age": "Hero age",
          "level": "Hero level",
          "name": "Hero name"
        },
        "dialog": {
          "delete": {
            "title": "Are you sure?",
            "yes": "Delete",
            "no": "No"
          },
          "bottomSheet": {
            "saved": "successfully saved",
            "deleted": "successfully deleted",
            "added": "successfully added"
          }
        },
        "auth": {
          "log_in" : "Log in",
          "login": "Log in",
          "sign_up" : "Sign up",
          "register": "Register",
          "password": "Password",
          "email": "Email",
          "validation" : {
            "minPass": "Minimum 6 characters",
            "patternPass": "a-zA-Z0-9_",
            "email": "Please enter a valid email address",
            "requiredEmail": "Email is required",
            "requiredPass": "Password is required"
          }
        }
      },
      {
        "header": {
          "title": "Тур Героев"
        },
        "menu": {
          "dashboard": "Панель",
          "heroes": "Герои",
          "store": "Магазин",
          "login": "Войти",
          "logout": "Выйти",
          "register": "Регистрация"
        },
        "search": {
          "placeholder": "Поиск героя"
        },
        "dashboard": {
          "title": "Лучшие герои"
        },
        "heroes": {
          "title": "Герои",
          "name": "Имя",
          "hero": "Новый герой"
        },
        "store": {
          "title": "Магазин",
          "price": "Цена",
          "button": "Купить"
        },
        "card": {
          "title": "Детали",
          "age": "Возраст",
          "level": "Уровень",
          "info": "Информация",
          "inventory": "Инвентарь",
          "name": "Имя",
          "class": "Класс",
          "friends": "Друзья",
          "save": "Сохранить",
          "back": "Назад",
          "cash": "Счёт",
          "item": "Предмет"
        },
        "validators": {
          "minName": "Минимум 3 символа",
          "alphabet": "Только латинский алфавит",
          "requiredName": "Введите имя",
          "requiredAge": "Введите возраст",
          "requiredLevel": "Введите уровень",
          "minAge": "Минимум 1",
          "maxAge": "Максимум 100",
          "minLevel": "Минимум 1",
          "maxLevel": "Максимум 100",
          "class": "Выберите класс"
        },
        "classes": {
          "barbarian": "Варвар",
          "cleric": "Священник",
          "fighter": "Воин",
          "rogue": "Плут",
          "wizard": "Волшебник"
        },
        "addHero": {
          "add": "Добавить",
          "close": "Закрыть",
          "select": "Выберите класс",
          "age": "Возраст героя",
          "level": "Уровень героя",
          "name": "Имя героя"
        },
        "dialog": {
          "delete": {
            "title": "Вы уверены?",
            "yes": "Удалить",
            "no": "Нет"
          },
          "bottomSheet": {
            "saved": "успешно сохранён",
            "deleted": "успешно удалён",
            "added": "успешно добавлен"
          }
        },
        "auth": {
          "log_in" : "Вход",
          "login": "Войти",
          "sign_up" : "Регистрация",
          "register": "Зарегистрироваться",
          "password": "Пароль",
          "email": "Почта",
          "validation" : {
            "minPass": "Минимум 6 символов",
            "patternPass": "a-zA-Z0-9_",
            "email": "Введите правильно почту",
            "requiredEmail": "Введите почту",
            "requiredPass": "Введите пароль"
          }
        }
      }
    ]
    return { heroes, items, translates, permissions };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
