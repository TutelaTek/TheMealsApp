//import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
//import { createDrawerNavigator } from 'react-navigation-drawer';
// changes made here need to npm install for tabs
//import { createBottomTabNavigator} from 'react-navigation-stack';
import Colors from '../constants/Colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
       navigationOptions: {
           headerTitle: 'Meal Categories'
       }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
       
    },
    
    MealDetail: MealDetailScreen
}, 
{
    defaultNavigationOptions: {
        
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTintColor: 'white'
       
    }
});

// Changes made here
/*
const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: MealsNavigator,
    Favorites: FavoritesScreen
});
*/



                                    //changes made here
export default createAppContainer(MealsNavigator /*MealsFavTabNavigator*/);

