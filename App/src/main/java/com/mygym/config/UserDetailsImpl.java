package com.mygym.config;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mygym.model.usuarios.Usuario;

public class UserDetailsImpl implements UserDetails {
	private static final long serialVersionUID = 1L;
	private Long id;
	private String username;
	@JsonIgnore
	private String password;
	private String rol;
	private Collection<? extends GrantedAuthority> authorities;

	public UserDetailsImpl(Long id, String username, String password, String rol,
			Collection<? extends GrantedAuthority> authorities) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.rol = rol;
		this.authorities = authorities;
	}

	public static UserDetailsImpl build(Usuario user) {
		List<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority(user.getRol().toString()));
		return new UserDetailsImpl(user.getUser_id(), user.getUsername(), user.getPassword(), user.getRol().toString(),
				authorities);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public Long getId() {
		return id;
	}

	@Override
	public String getPassword() {
		return password;
	}

	/**
	 * @return the rol
	 */
	public String getRol() {
		return rol;
	}

	/**
	 * @param rol the rol to set
	 */
	public void setRol(String rol) {
		this.rol = rol;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDetailsImpl user = (UserDetailsImpl) o;
		return Objects.equals(id, user.id);
	}
}
