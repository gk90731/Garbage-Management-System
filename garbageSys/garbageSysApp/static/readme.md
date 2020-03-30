###Basic Redux Setup :

We have 8 new things for me to discuss:

1.Components
2.Containers
3.actions
4.type
5.reducers
6.allreducers
7.store
8.Provider

## 1. Components:
This we already know.

## 2. Containers:
Here we have :

```
import {bindActionCreators} from 'redux'; 
import {connect} from 'react-redux';
import {login} from '../../core/actions/actions';
```

#Input of container:
```
function mapStateToProps(state) {
    return {
        loginStatus: state.loginStatus
    };
}
```
Here, loginstatus is the reducer name i.e state.loginStatus get updated when the action of login is called 
which will be cleared in actions, reducers & allreducers 

#Output of container:
```
function matchDispatchToProps(dispatch){
    return bindActionCreators({login: login}, dispatch);
}
```
Here, login is the action name and another login is the function that is getting called on submit click 
which have various arguments with it : onSubmit={() => this.props.login(this.state.username,this.state.password)} 
which is required for the action that we will see in actions 

#Famous connect function in the container:
It only connects the input and output to container i.e it's a mediator:
```
export default connect(mapStateToProps, matchDispatchToProps)(Login);
```

## 3. Actions:

Here what we used is this:
```
import axios from 'axios';
import {USER_LOGIN} from './type'; for this we will talk in type section


export const login = (username,password) => dispatch =>{
    axios({
        method: 'post',
        url: USER_LOGIN,
        data: {
          username: username,
          password:password 
        }
      }).then((res)=>{
        dispatch({
            type:'USER_LOGIN',
            payload:[res.data.key,res.status]
        })
      }).catch(err=>console.log(err));
}
```
#After action getting called this part of code that plays the vital role:
```
.then((res)=>{
        dispatch({
            type:'USER_LOGIN',
            payload:[res.data.key,res.status]
        })
      }).catch(err=>console.log(err));
}
```

This part of code is responsible for state change
and for which the reducer is bothered.

It has action type and payload which is also understandable by this code snippet:

```
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
```

Note : Action only calls the action and calls the reducer function and tells the reducer to update the state
       but doesn't update the state.

## 4. type:

It's actually a very little thing.

```
export const USER_LOGIN = '/rest-auth/login/';
```

This variable also becomes a URL here so that our effort should be less in this code snippet of actions:

```
export const login = (username,password) => dispatch =>{
    axios({
        method: 'post',
        url: USER_LOGIN,     -----> here is type that plays role
        data: {
          username: username,
          password:password 
        }
      }).then((res)=>{
        dispatch({
            type:'USER_LOGIN',
            payload:[res.data.key,res.status]
        })
      }).catch(err=>console.log(err));
}
```

## 5. reducers:

It's nothing but the code which detects that which action is called and what response is given by action.
The response given as payload which is to be updated to the state 

```
export default function (state = [], action) {
    switch (action.type) {
        case 'USER_LOGIN': ----> detecting that which action is getting called
            return action.payload; ----> returns the response that is given by actions
            break;
    }
    return state; ----> state is getting updated.
}
```

## 6. allreducers:

It's nothing but the reducer combiner i.e 
we can have many reducer to make the code clear which is getting combined here.

```
import {combineReducers} from 'redux';
import loginStatus from './reducers'; ----> Whole reducer file is given i variable called by state.loginStatus
const allReducers = combineReducers({
    loginStatus: loginStatus ----> Here, state.loginStatus is getting updated which can be accessible through mapStatesToProps
});
export default allReducers
```

## 7. store:

```
import {createStore, applyMiddleware} from 'redux';
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);
```

This creates store of different states.
This can be done by making a new file or in the root file i.e app.js file

## 8. Provider:
```
<Provider store={store}><Routes /></Provider>
```
This is the head or entery point of changing state which make states available to all component by passing states as props in the form of store.