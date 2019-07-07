<?php

/**
 * @singleton
 * @return PDO
 */
function pdo()
{
    static $pdo = null;

    if ( ! $pdo) {
        $db_init = 'mysql:host=localhost;dbname=artem';
        $db = require $_SERVER['DOCUMENT_ROOT'] . "/config/db.php";

        $pdo = new PDO($db_init, $db['name'], $db['pass']);
    }

    return $pdo;
}

/**
 * Загружает модель по имени
 *
 * @param $name
 */
function load_model($name)
{
    require_once $_SERVER['DOCUMENT_ROOT'] . "/models/$name-model.php";
}

/**
 * Загружает вью по имени
 *
 * @param $name
 */
function load_view($name)
{
    require_once $_SERVER['DOCUMENT_ROOT'] . "/views/$name-view.php";
}
