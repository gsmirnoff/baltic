/**
 * Created with IntelliJ IDEA.
 * User: GSmirnoff
 * Date: 18.12.13
 * Time: 14:31
 * To change this template use File | Settings | File Templates.
 */
var messages = {
    jan:'Январь',
    feb:'Февраль',
    mar:'Март',
    apr:'Апрель',
    may:'Май',
    jun:'Июнь',
    jul:'Июль',
    aug:'Август',
    sep:'Сентябрь',
    oct:'Октябрь',
    nov:'Ноябрь',
    dec:'Декабрь',
    tula:'Тула',
    yaroslavl:'Ярославль',
    company:'Компания',
    fact:'факт',
    plan:'план',
    totalForCompany:'Итого по компании',
    volumes:'Объемы, тыс. кг',
    lossMalt:'Потери экстракта при производстве солода, %',
    stageLosses:'Стадии потерь',
    barleyTransportationLosses:'Потери при транспортировке ячменя,%',
    barleySortingLosses:'Потери при сортировке ячменя,%',
    maltProductionLosses:'Потери при производстве солода,%',
    cerealTransportLosses:'Потери при внутризаводской транспортировке зернопродуктов, %',
    totalExtractLossesByFactory:'Итого потери экстракта по заводу',
    targetExtractLosses:'Цель потерь экстракта',
    avgByYear:'Среднее за год',
    yearTotal:'год, итог',
    totalExtractLossesByMaltFactory:'Общие потери экстракта по солодовенному цеху,%',
    extractLossesStatsBaltic:'Статистика потерь экстракта по стадиям, завод "Балтика-СПб"',
    glassYear:'Линии стекла, утилизация по компании, 2013 г.',
    glassBaltic:'Линии стекла, утилизация Ярославль, 2013 г.',
    glassFactory:'Линии стекла, накопительный итог по заводам, 2013 г.',
    glassNov:'Линии стекла, накопительный итог по заводам, ноябрь 2013 г.',
    potBaltic:'Линии банок, утилизация Ярославль, 2013 г.',
    potYear:'Линии банок, утилизация по компании, 2013 г.',

    get: function (m) {
        return this[m]?this[m]:m;
    }
}