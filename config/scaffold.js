module.exports = {
    'project': {
        'info': 'create project construction of axletree',
        'config': {
            'type': 'github',
            'repos': 'kekobin/axletree-framework-template',
            'prompt': [{
                name: 'project_name',
                description: 'Enter your project name',
                type: 'string',
                required: true,
                'default': 'axletreeDemo'
            }],
            'roadmap': [{
                reg: '**',
                release: '/${project_name}/$&'
            }]
        }
    }
};
