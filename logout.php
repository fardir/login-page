<?php
session_start();
session_destroy();
unset($_SESSION['username']);

echo '
    <script type="text/javascript">
           window.location = "http://localhost/login-page/index.php"
    </script>
    ';
