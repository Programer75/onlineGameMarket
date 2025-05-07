<template>
    <header>
        <div class="logo">
            <img class="logo-img" src="../assets/images/logo.png" alt="логотип">
            <div class="logo-text">
                <h2>gaming</h2>
            </div>
        </div>
        <nav>
            <ul class="horiz-menu">
                <li class="active"><a href="/">Главное</a></li>
                <li><a href="/cart">Магазин</a></li>
                <li><a href="/help">Помощь</a></li>
                <li><a href="/about">О нас</a></li>
            </ul>
        </nav>
        <div class="profile" v-if="user ?? null">
            <a href="/account">
                <img class="account-logo" :src=user.avaSrc :alt=user.name id="log">
            </a>
            <div class="user-cart" id="userCart" v-if="user ?? null">
                <img class="cart-icon" src="@/assets/icons/bag-handle-outline.svg" alt="">
            </div>
            <div class="notifications">
                <img class="notification-icon" src="@/assets/icons/notifications-outline.svg" alt="">
            </div>
        </div>
        <div class="profile" v-else>
            <a href="/account">
                <img class="account-logo" src="" alt="Войти" id="log">
            </a>
        </div>
    </header>
</template>

<style lang="less" scoped>
    header {
        height: 75px;
        width: 99vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8f9fa;
        border-bottom: 3px solid #41b883;
    }
    
    .logo {
        display: flex;
        align-items:center;
        
        .logo-img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
            margin-left: 10px;
        }
        
        .logo-text h2 {
            color: #343a40;
        }
    }
    
    nav {
        
        .horiz-menu {
            font-size: 24px;
            display: flex;
            list-style-type: none;

            li {
                margin-right: 20px;

                a {
                    text-decoration: none;
                    color: #343a40;

                    &:hover {
                        color:#41b883;
                    }
                }
            }
        }
    }
    
    .profile {
        font-size: 20px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-items: center;
        padding: 5px;

        a{
            text-decoration: none;
            color: #343a40;
        }

        .account-logo {
            border: 1px solid black;
            text-align: center;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            margin-right: 10px;
            margin-left: 10px;
        }
        
        .user-cart {
            color: #343a40;
            display: flex;
            .cart-icon {
                width: 40px;
                height: 40px;
                margin-left: 10px;
            }
        }
        
        .notifications {
            color: #343a40;
            display: flex;
            .notification-icon {
                width: 40px;
                height: 40px;
                margin-left: 10px;
            }
        }
    }
</style>

<script>
// import getData from '@/api'; ПРОВЕРКА НА НАЛИЧИЕ СЕССИИ ПОЛЬЗОВАТЕЛЯ
export default {
    name: 'IndexHeader',
    props:{},
    methods: {},
    data() {
        return {
            user: this.$store.state.user,
        };
    },
};
</script>
