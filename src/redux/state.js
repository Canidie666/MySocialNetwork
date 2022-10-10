const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: '42' },
            { id: 2, message: 'Its my first post', likesCount: '53' },
            { id: 3, message: 'Kak dela?', likesCount: '63' },
            { id: 4, message: 'Krutoi chel', likesCount: '39' }
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Petya" },
            { id: 2, name: "Vasya" },
            { id: 3, name: "Slavik" },
            { id: 4, name: "Dima" }
        ],
        messages: [
            { id: 1, message: "Sho tam kak?" },
            { id: 2, message: "Nu privet, eprst!" },
            { id: 3, message: "Gde den'gi?" },
            { id: 4, message: "Kak dela?" }
        ]
    },

    navbarPage: {
         friend:  [
        { id: 1, friend: "Petya"},
        { id: 2, friend: "Vasya"},
        { id: 3, friend: "Slavik"}
    ]
    }
}
export default state;
