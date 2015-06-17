module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'js/retailer.min.js': 'js/retailer.js'
        }
      }
    },

    sass: {
	    options: {
		    includePaths: ['css/scss/foundation']
	    },
      dev: {
        files: {
          'css/retailer.css': 'css/scss/retailer.scss'
        }        
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/retailer.min.css': 'css/scss/retailer.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },
      
      uglify: {
        files: ['js/retailer.js'],
        tasks: ['uglify']
      },
      
      sass: {
        files: 'css/scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('build', ['sass', 'uglify']);
  grunt.registerTask('default', ['build','watch']);
}