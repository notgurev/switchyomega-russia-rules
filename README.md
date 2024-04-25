# SwitchyOmega Russian rules

Правила для Chrome-расширения SwitchyOmega для пользователей из России. Фильтрует трафик, отправляя через прокси запросы
только к тем сайтам, которые недоступны из РФ, либо сами ограничивают доступ пользователям из РФ.

## Использование

Скачайте
расширение [SwitchyOmega](https://chromewebstore.google.com/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif)
из магазина Chrome.

Создайте или откройте switch profile через "Profiles > New profile..." с любым именем.

В разделе "Import online rule lists" нажмите "Add a rule list", и в "Rule List URL" вставьте следующее:

```
https://raw.githubusercontent.com/notgurev/switchyomega-russia-rules/main/OmegaRules_Russia.sorl
```

Либо следующее, если хотите использовать более нестабильную ветку:

```
https://raw.githubusercontent.com/notgurev/switchyomega-russia-rules/dev/OmegaRules_Russia.sorl
```

Нажмите "Download Profile Now". Готово.

## Ссылки

- [Формат правил SwitchyOmega](https://github.com/FelisCatus/SwitchyOmega/wiki/SwitchyOmega-conditions-format)
- [Похожий список от dvershinin](https://github.com/dvershinin/switchy-rules)
