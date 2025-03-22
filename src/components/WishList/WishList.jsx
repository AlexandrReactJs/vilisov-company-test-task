import React from "react";




const WishList = () => {
    const styles = {
        wishList: { width: "40%", backgroundColor: "#fff", borderRadius: "12px", },
        addWishWrap: { padding: "10px 20px" },
        addWishInput: { width: "80%", border: "unset", outline: "none", borderBottom: "2px solid #d8b5ff", padding: "10px", fontSize: "16px", fontWeight: 600, },
        addWishButton: { width: "20", backgroundColor: "#fff", padding: "10px", border: "2px solid #d8b5ff", borderRadius: "8px", fontWeight: 600, color: "#d8b5ff"},
        wishListItem: {display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "10px", },
        wishListItemTitle: {fontWeight: 600, color: "#686868"},
        deleteWishButton: {backgroundColor:"#fff", padding: "5px 10px", border: "2px solid rgb(255, 111, 135)", color: "rgb(255, 111, 135", borderRadius: "4px"},
        noWishesWrap: {display: "flex", justifyContent: "center"},
        noWishesTitle: { color: "#686868" }
    }
    /*
        Редко использую inline-стили, восновном работаю модульным css. Но у этого подхода есть свои плюсы:
        1. Динамические стили (легко комбенировать с JS)
        2. Упрощение разработки (но только в небольших проектах, прототипах или в таких тестовых заданиях)
        3. Локальная изоляция стилй (предотвращает  случайное влияние на другие компоненты)

    
    */


    const [list, setList] = React.useState([])
    const [inputValue, setInputValue] = React.useState("")



    const addWish = () => {
        setList([...list, inputValue])
    }
    const deleteWish = (wish) => {
        let newList = []
        newList = list.filter(item => item !== wish)
        setList(newList)

    }

    

    return (
        <div style={styles.wishList}>
            <div style={styles.addWishWrap}>
                <input style={styles.addWishInput} value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} placeholder="Введите желание" type="text" />
                <button style={styles.addWishButton} onClick={addWish}>Добавить</button>
            </div>

            <div style={{ padding: "20px"}}>
                {
                    list.length !== 0 ?
                        <div >
                            {
                                list.map((item, i) => (
                                    <div style={styles.wishListItem} key={i}>
                                        <p style={styles.wishListItemTitle}>{item}</p>
                                        <button style={styles.deleteWishButton} onClick={() => {deleteWish(item)}}>Удалить</button>
                                    </div>))
                            }
                        </div>
                        :
                        <div style={styles.noWishesWrap}>
                            <h3 style={styles.noWishesTitle}>Здесь пока ничего нет. 🤪</h3>
                        </div>
                }

            </div>
        </div>
    )
}



export default WishList;


/* 
    Для работы с бэкендом я бы лучше использовал Redux, всё таки большие данные лучше хранить в стейт-менеджере.
    Ещё бы я создал бы отдельную директорию api, там же создал файл api.js и в нем создал инстанс для запросов на бэкекнд. Ну и отдельные метотды под каждый запрос
    Так же при мапинге нашего списка вместо индекса элемнта я бы использовал id который приходил бы с бэка
    Ну и пререписал бы функцию удаления, потому что из-за отсутсвия id удаление происходит по тексту. И если у нас будет два желание с одинакоым текстом они удаляться оба.
*/