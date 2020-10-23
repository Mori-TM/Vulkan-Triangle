#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(location = 0) out vec4 FragColor;

void main()
{
	FragColor = vec4(0.3, 2.0, 0.8, 1.0);	
}
