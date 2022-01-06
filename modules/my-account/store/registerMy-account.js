import * as myaccountStore from '../modules/my-account/store/my-account.js'

export default async ({
    store
}) => {
    return await store.registerModule('my-account', myaccountStore, {
        namespaced: myaccountStore.namespaced,
    })
}