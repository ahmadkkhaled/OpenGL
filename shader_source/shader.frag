#version 330 core

in vec2 TexCoord;

out vec4 FragColor;

uniform sampler2D texture0; // a sampler holds a location value (a location references the texture unit, the default unit is GLTEXTURE0)
uniform sampler2D texture1;
uniform float ratio;

void main()
{
	FragColor = mix(texture(texture0, TexCoord), texture(texture1, TexCoord), ratio);
}