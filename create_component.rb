
# This is a custom script to speed-up components creation in React

p 'Write the name of your component'
component_name = gets.chomp

# Commands to create component folder and files
create_component_folder = "mkdir #{component_name}"
create_component_js = "touch './#{component_name}/#{component_name}.js'"
create_component_css = "touch './#{component_name}/#{component_name}.css'"

# JS Template
template_component_js = "
import \"./#{component_name}.css\"

function #{component_name}(props) {
  return (
    <div className=\"\">
    </div>
  )
}
export default #{component_name}"


#Commands to fill the files with starter information
write_component_js = "echo '#{template_component_js}' >> './#{component_name}/#{component_name}.js'"

# Full command
create_component = " #{create_component_folder} && #{create_component_js} && #{create_component_css} && #{write_component_js}"

# Run the full command
exec(create_component)