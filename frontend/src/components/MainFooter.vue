<template>
    <footer>
        <div class="footer-content">
            <p>&copy; 2025 My Company. All rights reserved.</p>
            <ul class="social-media">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </div>
    </footer>
</template>
<style lang="less" scoped>
    footer {
        background-color: #f8f9fa;
        padding: 20px;
        text-align: center;
        border-top: 3px solid #41b883;

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                margin: 0;
                color: #343a40;
            }

            .social-media {
                list-style-type: none;
                display: flex;
                gap: 15px;

                li {
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
    }
</style>
<script>
export default {
    name: 'MainFooter',
    data() {
        return {
            // Add any data properties you need here
        };
    },
}
</script>