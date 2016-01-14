(function() {
    'use strict';

    angular
        .module('app.runs')
        .run(appRun);

    appRun.$inject = ['routerHelper'];


    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'runs/list',
                config: {
                    url: '/runs/list',
                    templateUrl: 'app/runs/runs.html',
                    controller: 'RunsController',
                    controllerAs: 'vmRuns',
                    title: 'Runs',
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-lock"></i> Runs'
                    }
                }
            },
            {
                state: 'run-execute',
                config: {
                    url: '/runs/execute',
                    templateUrl: 'app/runs/run-execute.html',
                    controller: 'RunController',
                    controllerAs: 'vmRunExecute',
                    title: 'Execute run'
                }
            },
            // new nested route and controller for addDefect modal window
            {
                state: 'generate-defect',
                config: {
                    url: '/create-defect',
                    templateUrl: 'app/defects/add-defect.template.html',
                    controller: 'AddDefectController',
                    controllerAs: 'vmAddDefect',
                    title: 'Defect',
                    params: {
                        previousState: null,
                        run: null
                    },
                    parent: "run-execute"
                }
            }
        ];
    }
})();