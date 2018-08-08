module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
          dynamic: {
            files: [{
              expand: true,
              cwd: 'client/images/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'static/images'
            }]
          }
        },

        copy : {
          fonts : {
            files : [
              {
                expand : true,
                cwd    : 'client/fonts',
                dest   : 'static/fonts',
                src    : ['*.{eot,woff,svg}']
              }
            ]
          }
        },

        sass: {
          dist: {
            options: {
              style: 'expanded'
            },
            files: {
              'static/styles/base.css': 'client/styles/base.scss'
            }
          }
        },

        autoprefixer: {
          options: {
            browsers: ['last 2 versions'],
            map : true
          },
          your_target: {
            src : 'static/styles/*.css'
          },
        },

        watch: {
         options: {
            livereload: true,
 
         },
          img: {
            files: ['client/**/*.{png,jpg,gif}'],
            tasks: ['imagemin'],
          },
          css: {
            files:['client/**/*.scss'],
            tasks: ['sass', 'autoprefixer'],
          },
          fonts: {
            files:['client/**/*.{eot,woff,svg}'],
            tasks: ['copy'],
          }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['imagemin', 'copy', 'sass', 'autoprefixer', 'watch' ]);
};
