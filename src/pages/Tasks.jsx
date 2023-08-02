// import style from './Create.module.css';
// import stylePseudo from './Pseudo.module.css';
// import { Link } from 'react-router-dom';
// import { HiOutlineX } from 'react-icons/hi';
// import { BsCircle } from 'react-icons/bs';
// import { titleData } from '../data/title';

// export function Tasks () {
//     return (
//         <div className={style.Create}>
//             <div className={style.readTask}>
//                 <Link className={style.link} to='/accountLayout'><HiOutlineX size='4rem' color='#000' /></Link>
//             </div>
//             <div className={style.form}>
//                 {titleData.map((title, i) => <p className={((i +1)% 3 === 0 && i !== 0) ? stylePseudo.readTitle : style.readTitle}
//                 key={title.id}><BsCircle  size='1.5rem' color='#000' />{title.title}</p>)}
//             </div>
//             <div className={style.dotLink}>
//                 <Link className={style.signOut} to='/'><BsCircle  size='1.5rem' color='#000' /><p>Sign out</p></Link>
//             </div>
//         </div>
//     )
// };