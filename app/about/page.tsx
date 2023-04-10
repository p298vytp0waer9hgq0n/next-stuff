import Link from "next/link";

interface IAbsRestaurant {
    makeSnack: () => {
        ingredient: string;
    };
    makeSoup: () => {
        ingredient: string;
    }
}

class AbsRestaurant implements IAbsRestaurant {
    protected ingredients: string[] = [];

    makeSnack () {
        return { ingredient: this.ingredients[0]};
    }
    makeSoup () {
        return { ingredient: this.ingredients[1]};
    }
    makeMainCourse () {
        return { ingredient: this.ingredients[2]};
    }
    makeDessert () {
        return { ingredient: this.ingredients[3]};
    }
}

class JapaneseRestaurant extends AbsRestaurant {
    constructor () {
        super();
        this.ingredients = ['seaweed', 'salmon', 'shrimp', 'rice'];
    }
}
class AfricanRestaurant extends AbsRestaurant {
    constructor () {
        super();
        this.ingredients = ['roach', 'ants', 'crocodile', 'mango'];
    }
}
class ItalianRestaurant extends AbsRestaurant {
    constructor () {
        super();
        this.ingredients = ['tomatoes', 'mushrooms', 'chicken', 'nuts'];
    }
}
class DessertWithFeeling<T extends { makeDessert: () => { ingredient: string }}> {
    constructor (private component: T) {}

    makeDessert () {
        return {
            ingredient: `Bloody ${this.component.makeDessert().ingredient}!`
        };
    }
}
export class PigeonDecorator<T extends { send: () => string }> {
    constructor (private notifier: T) {}
    
    send () {
      return `Pigeon ${this.notifier.send()}`
    }
  }
const restaurant = new AfricanRestaurant();
const restaurantWithFeeling = new DessertWithFeeling(restaurant);

export default function About () {
    if (Math.random() > .5) throw new Error('Not today!');
    return (
        <>
            <h1>About!</h1>
            <Link href="/">Home Page</Link>
            <p>{restaurantWithFeeling.makeDessert().ingredient}</p>
        </>
    )
}