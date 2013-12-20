/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 19.12.13
 * Time: 16:45
 * To change this template use File | Settings | File Templates.
 */


var RoleConfig = {
    roles:{
        role1:{
            solod:['solodBaltic', 'solodNov'],
            syrop:['syropYear'],
            extract:['extractLossBaltic', 'extractLossNov'],
            hfm:['glassBaltic', 'potBaltic', 'glassNov']
        },
        role2:{
            solod:['solodNov', 'solodYear'],
            syrop:['syropYear'],
            extract:['extractLossNov', 'extractLossYear'],
            hfm:['glassYear', 'potYear', 'glassFactory', 'glassNov']
        },
        role3:{
            solod:['solodYear'],
            syrop:['syropYear'],
            extract:['extractLossYear'],
            hfm:['glassYear', 'potYear', 'glassFactory']
        }
    }

}