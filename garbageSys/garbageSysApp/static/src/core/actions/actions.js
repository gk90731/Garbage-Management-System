import axios from 'axios';
import {USER_LOGIN,GETGP,ALTER} from './type';


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


export const getGP_List = () => dispatch =>{
  axios({
      method: 'get',
      // url: GET_PROPERTY_LIST+"/?page_size="+limit,
      url: GETGP,
      headers: {
        // 'Authorization':"Token 0997d283d37828b28126eb7d3aa008c647816135"
      }
    }).then((res)=>{
      dispatch({
          type:'GETGP',
          payload:res.data
      })
    }).catch(err=>console.log(err));    
}



export const AlterState = (csrftokencookie,UID) => dispatch =>{
  axios({
      method: 'post',
      url: ALTER,
      headers: {
        // 'Authorization':"Token C8WFUv99n34X0FvzMegg8R8QngIG8WCGJRE8sYsWPLcMdGtWIgA3Bj3PiAsWvZMZ"
        'X-CSRFToken': csrftokencookie
      }, 
      data: {
        UID: UID,
      }
    }).then((res)=>{
      dispatch({
          type:'ALTER',
          payload:[res.data.key,res.status]
      })
    }).catch(err=>console.log(err));

}